<template>
  <div class="bg_color">
    <div class="mx-14 ">
      <div class="grid-1 grid md:grid-cols-2 lg:grid-cols-2 pt-8 items-center">
        <div>
          <div class="pb-24">
            <DynamicTitlesWhite :title="title" />
          </div>

          <div class="pl-6 pt-10">
            <p class="text-white font_500 text_27">Address</p>
            <p class="text-white font_500 text_18">
              Laldarbur, Kathmandu, Nepal <br />
              +977 01 4485456 <br />
              info@yajtechnologies.com <br />
              Open 9am to 6pm
            </p>
          </div>
        </div>
        <!-- form -->
        <div class="py-24 ">
          <div class="contact_form h-auto w-auto px-10 py-10">
            <div class="max-w-full">
              <input
                class="bg-transparent border-b pb-2 mb-6 w-full text-white placeholder-white focus:outline-none focus:border-grey-500"
                type="text"
                placeholder="Name"
              />
            </div>
            <div class="max-w-full">
              <input
                class="bg-transparent border-b pb-2 mb-6 w-full text-white placeholder-white focus:outline-none focus:border-grey-500"
                type="text"
                placeholder="Email"
              />
            </div>
            <div class="max-w-full">
              <textarea
                class="bg-transparent border-b pb-10 w-full text-white placeholder-white focus:outline-none focus:border-grey-500"
                type="text"
                placeholder="About Project"
              />
            </div>
            <!-- <div class="pt-4"> -->
            <!-- <input
                class="relative float-left pt-4 mt-[6rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary"
                type="checkbox"
                id="checkboxNoLabel"
                value=""
                aria-label="..."
              /><label
                class="inline-block pl-[0.15rem] hover:cursor-pointer"
                for="checkboxDefault"
              >
                By continuing, you acknowledge that you’ve read & understood,
                and agree to YAJ Tech’s Terms of Service & Privacy Policy.
              </label> -->
            <!-- </div> -->
            <div class="flex justify-between">
              <div
                class="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem] pt-[1.5rem]"
              >
                <input
                  class="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary"
                  type="checkbox"
                  id="inlineCheckbox1"
                  value="option1"
                />
                <label
                  class="inline-block pl-[0.15rem] hover:cursor-pointer text_white text-base"
                  for="inlineCheckbox1"
                  >By continuing, you acknowledge that<br />
                  you’ve read & understood, and agree to YAJ<br />
                  Tech’s Terms of Service & Privacy Policy.</label
                >
              </div>
              <button
                class="rounded-lg bg_white btn mt-[1.5rem] text-primary font_700 text-lg"
              >
                get in touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const title = ref("Contact Us");
</script>
Contact Us
<style lang="scss" scoped>
.contact_form {
  // height: 440px;
  // max-height: 440px;
  // width: 660px;
  // max-width: 660px;
  background-color: rgba(255, 255, 255, 0.05);
}

.btn {
  width: 152px;
  height: 48px;
}

.text_white {
  color: rgba(255, 255, 255, 0.8);
}
@media screen and (max-width: 600px) {
.pt-10{
padding-top: 2px;
}

.pb-24{
  padding-bottom: 32px;
}
.py-24{
  padding-top: 32px;
  padding-bottom: 32px;
}

.py-10{
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.px-10{
  padding-right: 1.5rem;
  padding-left: 1.5rem;
}
}

</style>
