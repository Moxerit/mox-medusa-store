<script>
  // @ts-nocheck

  import Footer from "../components/Footer.svelte";
  import "../app.css";
  import Navbar from "../components/Navbar.svelte";
  import { writable, derived } from "svelte/store";

  // export let data;
  import {getProducts} from '../util/shared';

  let products;
    const productData = async () => {
        const data = await getProducts();
        products = data;
        console.log(products, 'products')
    }

  $: productData()
</script>

<div>
  <Navbar />
   <div class="mt-40">
    <div class="flex">
      <div class="flex-grow text-4xl font-extrabold text-center">
        Best Qualities You Can Trust
      </div>
    </div>
    <div class="flex">
      <div class="flex-grow text-4xl mt-12 font-extrabold text-center">
        <a
          href="/products"
          class="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded "
          >Products</a
        >
      </div>
    </div>
    <div
      class="max-w-12xl mx-auto h-full flex flex-wrap justify-center py-28 gap-10"
    >
    {#if products}
      {#each products?.products as product, i}

      <div class="w-full max-w-sm bg-test rounded-2xl shadow hover:shadow-xl transition-all ease-in-out duration-250">
        <a href={`/products/${product.id}`}
        data-mdb-ripple="true"
        data-sveltekit-prefetch
        data-mdb-ripple-color="light">
          <img class="rounded-t-lg" src={product.thumbnail} alt={product.title} />
        </a>
        <div class="px-6 pb-5 rounded-2xl bg-test">
            <a href={`/products/${product.id}`}
            data-mdb-ripple="true"
            data-sveltekit-prefetch
            data-mdb-ripple-color="light">
                <h5 class="my-4 text-2xl font-semibold tracking-tight text-gray-900">{product.title}</h5>
            </a>
            
            <div class="flex items-center justify-between ">
                <span class="text-3xl font-bold text-gray-900 ">&dollar;{product.variants[0].prices[0].amount / 100}</span>
                <a href={`/products/${product.id}`}
                data-mdb-ripple="true"
                data-sveltekit-prefetch
                data-mdb-ripple-color="light"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Add to cart
              </a>
            </div>
        </div>
    </div>
      {/each}
      {/if}
    </div>
  </div>
  <Footer />
</div>