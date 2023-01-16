import { component$, Slot } from '@builder.io/qwik';
import { FooterNavigationMenu } from '~/components/navigations/footer-navigation-menu';

export default component$(() => {
  return (
    <>
      <main class="w-min-full h-min-full dark:bg-gray-900 text-gray-700 dark:text-gray-300">
        <section class="container mx-auto">
          <Slot />
        </section>
        <FooterNavigationMenu/>
      </main>
    </>
  );
});
