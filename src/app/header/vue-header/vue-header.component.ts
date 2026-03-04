import { defineCustomElement, h, getCurrentInstance } from 'vue';

const VueHeaderComponent = {
  setup() {
    const instance = getCurrentInstance();

    const handleLanguageClick = (language: string) => {
      const event = new CustomEvent('languageChange', {
        detail: { language },
        bubbles: true,
        composed: true,
      });
      instance?.proxy?.$el?.dispatchEvent(event);
    };

    return () =>
      h(
        'header',
        {
          class: `
            bg-gradient-to-r from-primary to-tertiary
            text-white  p-4 max-h-[50px] sm:max-h-[100px]
            flex justify-between items-center
          `,
        },
        [
          h('svg', { class: 'max-w-1/4' }, [h('use', { href: 'raion.svg#Layer_1' })]),
          h('div', { class: 'flex justify-end gap-2' }, [
            h(
              'button', { class: 'bg-transparent border-none cursor-pointer', 'aria-label': 'pl',
                onClick: () => handleLanguageClick('pl') }, [
                h('svg', { class: 'max-w-[25px] max-h-[25px]' }, [
                  h('use', { href: 'flags.svg#pl' }),
                ]),
              ],
            ),
            h('button', { class: 'bg-transparent border-none cursor-pointer', 'aria-label': 'en',
              onClick: () => handleLanguageClick('en') }, [
              h('svg', { class: 'max-w-[25px] max-h-[25px]' }, [
                h('use', { href: 'flags.svg#eng' }),
              ]),
            ]),
          ]),
        ],
      );
  },
};

const VueHeaderElement = defineCustomElement({
  ...VueHeaderComponent,
  shadowRoot: false,
});

customElements.define('vue-header', VueHeaderElement);

export default VueHeaderElement;
