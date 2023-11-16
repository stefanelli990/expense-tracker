<template>
  <AppHeader/>
  
  <main class="section-container">
    <div class="flex space-x-4">
        <div class="bg-white rounded-xl p-6 w-1/2">
            <h2 class="text-xl font-semibold mb-6">Edit Budget</h2>
            <div class="flex justce items-end space-x-2">
                <AppInputs label="Your Budget"/>
                <AppButtons>Set Budget</AppButtons>
            </div>
        </div>
        <div class="bg-white rounded-xl p-6 w-1/2">
            <h2 class="text-xl font-semibold mb-6">Add New Transaction</h2>
            <div class="flex justce items-end space-x-2">
                <AppInputs label="Transaction Name"/>
                <AppInputs label="Transaction Cost"/>
                <AppButtons>Add</AppButtons>
            </div>
        </div>
    </div>

    <div class="flex space-x-4 my-4">
      <div class="bg-white rounded-xl p-4 flex items-center space-x-4 flex-1">
        <div class="bg-blue-100 h-24 w-24 rounded-xl flex justify-center items-center">
          <Icon width="48" height="48" class="text-blue-500" icon="ph:wallet-fill" />
        </div>
        <div>
          <h2 class="text-2xl font-semibold">$100</h2>
          <p class="text-md font-semibold">Budget</p>
        </div>
      </div>

      <div class="bg-white rounded-xl p-4 flex items-center space-x-4 flex-1">
        <div class="bg-yellow-100 h-24 w-24 rounded-xl flex justify-center items-center">
          <Icon width="48" height="48" class="text-yellow-500" icon="fluent:money-hand-16-filled" />
        </div>
        <div>
          <h2 class="text-2xl font-semibold">$70</h2>
          <p class="text-md font-semibold">Expenses</p>
        </div>
      </div>

      <div class="bg-white rounded-xl p-4 flex items-center space-x-4 flex-1">
        <div class="bg-green-100 h-24 w-24 rounded-xl flex justify-center items-center">
          <Icon width="48" height="48" class="text-green-500" icon="fa:dollar" />
        </div>
        <div>
          <div class="flex items-center space-x-1">
            <h2 class="text-2xl font-semibold">$30</h2><div>
              <Icon width="20" height="20" class="text-green-500" icon="ph:arrow-up-left-bold" />
              <!-- <Icon class="text-red-500" icon="ph:arrow-down-left-bold" /> -->
            </div>
          </div>
          <p class="text-md font-semibold">Budget</p>
        </div>
      </div>
    </div>

    <h2 class="mt-8 mb-4 text-2xl font-semibold">Transaction History</h2>
    
    <table class="border-collapse table-auto w-full text-sm text-left bg-white rounded-lg p-4">
  <thead class="">
    <tr>
      <th class="border-b border-slate-100 p-4 pl-8 pb-3 font-semibold">No.</th>
      <th class="border-b border-slate-100 p-4 pl-8 pb-3 font-semibold">Name</th>
      <th class="border-b border-slate-100 p-4 pl-8 pb-3 font-semibold">Cost</th>
      <th class="border-b border-slate-100 p-4 pl-8 pb-3 font-semibold">Date</th>
      <th class="border-b border-slate-100 p-4 pl-8 pb-3 font-semibold">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border-b border-slate-100 p-4 pl-8">1.</td>
      <td class="border-b border-slate-100 p-4 pl-8">Buy Iphone</td>
      <td class="border-b border-slate-100 p-4 pl-8">$1000</td>
      <td class="border-b border-slate-100 p-4 pl-8">26 April 2023</td>
      <td class="border-b border-slate-100 p-4 pl-8">
        <div class="flex items-center space-x-1 cursor-pointer"><span>Remove</span><Icon class="text-red-500" width="16" height="16" icon="carbon:close-filled" /></div>
      </td>
    </tr>
  
  
  </tbody>
</table>
  </main>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue';
import AppButtons from './components/AppButtons.vue';
import AppInputs from './components/AppInputs.vue';
import { Icon } from '@iconify/vue';

</script>


