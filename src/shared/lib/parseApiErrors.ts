import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { toast } from 'react-toastify';

import type { IQueryBaseResponseResult } from 'shared/types';

/**
 * Обрабатывает ошибки API и отображает соответствующие уведомления пользователю.
 *
 * @param {FetchBaseQueryError} error - Объект ошибки, полученный от RTK Query
 *
 * Обрабатываемые типы ошибок:
 * - FETCH_ERROR: ошибки сети и подключения
 * - PARSING_ERROR: ошибки парсинга ответа сервера
 * - CUSTOM_ERROR: пользовательские ошибки
 * - HTTP ошибки (по статус коду)
 *
 * Для HTTP ошибок приоритет сообщений:
 * 1. message_ru из ответа сервера
 * 2. message из ответа сервера
 * 3. Стандартное сообщение с кодом ошибки
 */
export const parseApiErrors = (error: FetchBaseQueryError) => {
  if ('status' in error) {
    switch (error.status) {
      case 'FETCH_ERROR':
        toast.error('Ошибка сети. Проверьте ваше подключение к интернету.');
        break;
      case 'PARSING_ERROR':
        toast.error(
          `Ошибка обработки данных от сервера: ${JSON.stringify(error.data)}`,
        );
        break;
      case 'CUSTOM_ERROR':
        toast.error(
          `Произошла непредвиденная ошибка: ${JSON.stringify(error.error)}`,
        );
        break;
      default:
        if (typeof error.status === 'number') {
          const errorData = error.data as IQueryBaseResponseResult;

          if (errorData?.message) {
            toast.error(errorData.message);
          } else {
            toast.error(`HTTP ошибка ${error.status}`);
          }
        } else {
          toast.error('Неизвестная ошибка.');
        }
        break;
    }
  } else {
    // Обработка ошибок, которые не являются FetchBaseQueryError
    console.error('Необработанная ошибка API:', error);
    toast.error('Произошла непредвиденная ошибка.');
  }
};
