export const FooterNavigationMenu = () => (
<div class="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col gap-2 items-center">
  <div class="flex flex-row gap-2">
    [<a href="https:/github.com/aasumitro/pokewar" target="_blank" class="font-bold cursor-pointer tracking-tighter text-black border-b-2 border-red-200 hover:border-red-400 dark:text-gray-300">Source Code</a>]
    [<a href="/docs/index.html" target="_blank" class="font-bold cursor-pointer tracking-tighter text-black border-b-2 border-red-200 hover:border-red-400 dark:text-gray-300">API Spec</a>]
  </div>
  <div class="flex flex-row gap-2 ">
    <p class="font-bold">Pokewar</p> —
    <p class="font-medium italic">API Powered by</p>
    <a href="https://pokeapi.co/" target="_blank">
      <img
        class="h-4"
        src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
        alt="pokeapi-logo"
      />
    </a>
  </div>
</div>
);