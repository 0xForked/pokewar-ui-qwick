import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { PokewarLogo } from '~/components/icons/pokewar';
import { MainNavigationMenu } from '~/components/navigation/main-navigation-menu';

export default component$(() => {
  return (
    <div class="flex flex-col items-center justify-center h-screen">
      <PokewarLogo/>
      <MainNavigationMenu/>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Pokewar - Pocket Monster Battleroyale',
  meta: [
    {
      name: 'description',
      content: 'Pokewar UI (Pocket Monster Battleroyale User Interface) for Web',
    },
  ],
};
