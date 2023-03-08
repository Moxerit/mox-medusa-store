<script>
  export let productId;
  import Icon from "svelte-icons-pack/Icon.svelte";
  import AiOutlineShoppingCart from "svelte-icons-pack/ai/AiOutlineShoppingCart";
</script>

<div>
  <div class="fixed z-50 bg-white topNav w-full top-0 p-3 md:bg-opacity-0">
    <div class="max-w-6xl relative flex mx-auto flex-col md:flex-row">
      <a href="#/" class="md:hidden absolute top-1 right-14">
        <div class="relative">
          <div class="relative">
            <Icon src="{AiOutlineShoppingCart}" />
            {#if productId?.length >= 1}
            <div
              class="absolute px-1 bg-red-400 -top-1 -right-1 rounded-full border-2 border-white text-white"
              id="cart"
              style="font-size: 10px"
            >
              {productId?.length}
            </div>
            {/if}
          </div>
        </div>
      </a>

      <div class="menu hidden md:flex flex-col md:flex-row mt-5 md:mt-0 gap-16">
        <div class="flex flex-col md:flex-row gap-12 capitalize">
          <div class="text-red-400 no-underline font-bold border-red-400">
            <a href="/">Home</a>
          </div>
          <div class="text-red-400 no-underline font-bold border-red-400">
            <a href="/products">Products</a>
          </div>
        </div>
        <div class="flex gap-12">
          <a href="#/" class="hidden md:block">
            <div class="relative">
              <Icon size="25" src="{AiOutlineShoppingCart}" />
              {#if productId?.length >= 1}
              <div
                class="absolute px-1 bg-red-400 -top-1 -right-1 rounded-full border-2 border-white text-white"
                id="cart"
                style="font-size: 10px"
              >
                {productId?.length}
              </div>
              {/if}
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>