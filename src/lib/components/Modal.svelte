  
  <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div class="bg-white bg-opacity-80 backdrop-blur-md rounded-lg p-6 max-w-lg mx-auto shadow-xl relative">
      <slot></slot>
      <div class="absolute top-4 right-4">
        <slot name="close"></slot>
      </div>
    </div>
  </div>
  