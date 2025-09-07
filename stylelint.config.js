/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order',
  ],
  rules: {
    // Короткий HEX (#fff вместо #ffffff) [https://stylelint.io/user-guide/rules/color-hex-length]
    'color-hex-length': 'short',

    // Использовать только числовые значения для font-weight [https://stylelint.io/user-guide/rules/font-weight-notation]
    'font-weight-notation': 'numeric',

    // Не добавлять единицы измерения к нулю (например, 0 вместо 0px) [https://stylelint.io/user-guide/rules/length-zero-no-unit]
    'length-zero-no-unit': true,

    // Отключение паттерна на класс [https://stylelint.io/user-guide/rules/selector-class-pattern]
    'selector-class-pattern': null,

    // Запрет на неизвестные свойства [https://stylelint.io/user-guide/rules/property-no-unknown]
    'property-no-unknown': true,

    // Запрет дублирования свойств [https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-properties]
    'declaration-block-no-duplicate-properties': true,

    // // Запрет на пустые блоки [https://stylelint.io/user-guide/rules/block-no-empty]
    'block-no-empty': null,

    // Запрет на неизвестные псевдоклассы [https://stylelint.io/user-guide/rules/selector-pseudo-class-no-unknown]
    'selector-pseudo-class-no-unknown': [
      true,
      { ignorePseudoClasses: ['global'] },
    ],

    // Запрет на неизвестные селекторы [https://stylelint.io/user-guide/rules/selector-type-no-unknown]
    'selector-type-no-unknown': true,

    // Запрет на неизвестные единицы измерения [https://stylelint.io/user-guide/rules/unit-no-unknown]
    'unit-no-unknown': true,

    // Запрет на неизвестные псевдоэлементы [https://stylelint.io/user-guide/rules/selector-pseudo-element-no-unknown]
    'selector-pseudo-element-no-unknown': true,

    // Запрет на !important в keyframes [https://stylelint.io/user-guide/rules/keyframe-declaration-no-important]
    'keyframe-declaration-no-important': true,

    // Запрет на невалидные медиа запросы [https://stylelint.io/user-guide/rules/media-query-no-invalid]
    'media-query-no-invalid': true,

    // Запрет на комментарии через двойной слэш [https://stylelint.io/user-guide/rules/no-invalid-double-slash-comments]
    'no-invalid-double-slash-comments': true,

    // Запрет на невалидное указание grid сетки [https://stylelint.io/user-guide/rules/named-grid-areas-no-invalid]
    'named-grid-areas-no-invalid': true,

    // Запрет на указание вычислений в calc без пробелов [https://stylelint.io/user-guide/rules/function-calc-no-unspaced-operator]
    'function-calc-no-unspaced-operator': true,

    // Запрет на css переменные без var в свойстве [https://stylelint.io/user-guide/rules/custom-property-no-missing-var-function]
    'custom-property-no-missing-var-function': true,

    // Запрет на невалидные HEX цвета [https://stylelint.io/user-guide/rules/color-no-invalid-hex]
    'color-no-invalid-hex': true,

    // Запрет на шрифты без указания общего семейства, по типу sans-serif [https://stylelint.io/user-guide/rules/font-family-no-missing-generic-family-keyword]
    'font-family-no-missing-generic-family-keyword': true,

    // Запрет нестандартных значений направления для линейных градиентных функций [https://stylelint.io/user-guide/rules/function-linear-gradient-no-nonstandard-direction]
    'function-linear-gradient-no-nonstandard-direction': true,

    // Запрет на переопределение полных свойств (например padding-left) короткими свойствами (например padding) [https://stylelint.io/user-guide/rules/declaration-block-no-shorthand-property-overrides]
    'declaration-block-no-shorthand-property-overrides': true,

    // Запрет на неизвестные значения для свойства [https://stylelint.io/user-guide/rules/declaration-property-value-no-unknown]
    'declaration-property-value-no-unknown': true,

    // Запрет на неизвестные анимации (keyframes) [https://stylelint.io/user-guide/rules/no-unknown-animations]
    'no-unknown-animations': true,

    // Запрет на префиксы в названии CSS правил [https://stylelint.io/user-guide/rules/at-rule-no-vendor-prefix]
    'at-rule-no-vendor-prefix': true,

    // Запрет на !important [https://stylelint.io/user-guide/rules/declaration-no-important]
    'declaration-no-important': true,

    // Запрет префиксов в медиа запросах [https://stylelint.io/user-guide/rules/media-feature-name-no-vendor-prefix]
    'media-feature-name-no-vendor-prefix': true,

    // Запрет префиксов в свойствах [https://stylelint.io/user-guide/rules/property-no-vendor-prefix]
    'property-no-vendor-prefix': true,

    // Запрет префиксов в селекторах [https://stylelint.io/user-guide/rules/selector-no-vendor-prefix]
    'selector-no-vendor-prefix': true,

    // Запрет префиксов в значениях [https://stylelint.io/user-guide/rules/value-no-vendor-prefix]
    'value-no-vendor-prefix': true,

    // Правило написания названия функции (указано строчные) [https://stylelint.io/user-guide/rules/function-name-case]
    'function-name-case': 'lower',

    // Правило написания селектора (указано строчные) [https://stylelint.io/user-guide/rules/selector-type-case]
    'selector-type-case': 'lower',

    // Правило написания значения (указано строчные) [https://stylelint.io/user-guide/rules/value-keyword-case]
    'value-keyword-case': 'lower',

    // Пустая строка перед CSS правилом [https://stylelint.io/user-guide/rules/at-rule-empty-line-before]
    'at-rule-empty-line-before': [
      'always',
      { except: 'first-nested' },
    ],

    // Пустая строка перед селектором [https://stylelint.io/user-guide/rules/rule-empty-line-before]
    'rule-empty-line-before': [
      'always',
      { except: 'first-nested' },
    ],

    // Процентное обозначение для альфа значений [https://stylelint.io/user-guide/rules/alpha-value-notation]
    'alpha-value-notation': 'percentage',

    // Современная нотация для color функций [https://stylelint.io/user-guide/rules/color-function-notation]
    'color-function-notation': 'modern',

    // Строчное обозначение для CSS правила @import [https://stylelint.io/user-guide/rules/import-notation]
    'import-notation': 'string',

    // Процентное обозначение для ключевых кадров в keyframes [https://stylelint.io/user-guide/rules/keyframe-selector-notation]
    'keyframe-selector-notation': 'percentage',

    // Префиксное обозначение для диапазонов медиа запроса [https://stylelint.io/user-guide/rules/media-feature-range-notation]
    'media-feature-range-notation': 'prefix',

    // Простое обозначение для псевдокласса :not [https://stylelint.io/user-guide/rules/selector-not-notation]
    'selector-not-notation': 'simple',

    // Двойное двоеточие для псевдоэлементов [https://stylelint.io/user-guide/rules/selector-pseudo-element-colon-notation]
    'selector-pseudo-element-colon-notation': 'double',

    // Требовать всегда кавычки для названий шрифтов [https://stylelint.io/user-guide/rules/font-family-name-quotes]
    'font-family-name-quotes': 'always-unless-keyword',

    // Требовать кавычки для ссылок [https://stylelint.io/user-guide/rules/function-url-quotes]
    'function-url-quotes': 'always',

    // Требовать кавычки для значения атрибута селектора [https://stylelint.io/user-guide/rules/selector-attribute-quotes]
    'selector-attribute-quotes': 'always',

    // Запрет на избыточные полные свойства короткого свойства [https://stylelint.io/user-guide/rules/declaration-block-no-redundant-longhand-properties]
    'declaration-block-no-redundant-longhand-properties': true,

    // Запрет на избыточные значения в коротких свойства (например padding: 1px 1px; -> padding: 1px;) [https://stylelint.io/user-guide/rules/shorthand-property-no-redundant-values]
    'shorthand-property-no-redundant-values': true,

    // Пробелы в начале и в конце комментария [https://stylelint.io/user-guide/rules/comment-whitespace-inside]
    'comment-whitespace-inside': 'always',

    // Запретить использование устаревших (deprecated) ключевых слов в значениях CSS-свойств внутри деклараций. [https://stylelint.io/user-guide/rules/declaration-property-value-keyword-no-deprecated]
    'declaration-property-value-keyword-no-deprecated': [
      true,
      { ignoreKeywords: ['button'] },
    ],

    'no-descending-specificity': null,
  },
};
