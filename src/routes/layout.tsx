import { component$, Slot } from '@builder.io/qwik';
import { FooterNavigationMenu } from '~/components/navigations/footer-navigation-menu';

export default component$(() => {
  return (
    <>
      <main class="w-min-full h-min-full">
        <section class="container mx-auto">
          <Slot />
        </section>
        <FooterNavigationMenu/>
      </main>
    </>
  );
});
