import { component$} from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { BackNavigationMenu } from '~/components/navigations/back-navigation-menu';

export default component$(() => {
  return (
    <div class="flex flex-col p-12 w-screen h-screen">
      <BackNavigationMenu title="Playground" />
      Playground
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Pokewar Playground - Pocket Monster Battleroyale',
  meta: [
    {
      name: 'description',
      content: 'Pokewar UI (Pocket Monster Battleroyale User Interface) for Web',
    },
  ],
};
