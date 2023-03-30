<template>
    <div class="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 z-40 hidden" :class="{ 'hidden': !isOpen }">
      <ul class="flex flex-col justify-center h-full">
        <li><a href="#" class="text-white font-bold py-2 px-4">Home</a></li>
        <li><a href="#" class="text-white font-bold py-2 px-4">About</a></li>
        <li><a href="#" class="text-white font-bold py-2 px-4">Contact</a></li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isOpen: {
        type: Boolean,
        default: false,
      },
    },
  };
  </script>
  