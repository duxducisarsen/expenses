<template>
    <div>
        <!-- <div class="tw-min-h-screen tw-flex tw-flex-col tw-sm:justify-center tw-items-center tw-pt-6 tw-sm:pt-0 tw-bg-gray-100">
            <div class="tw-w-full tw-sm:max-w-md tw-mt-6 tw-px-6 tw-py-4 tw-bg-white tw-shadow-md tw-overflow-hidden tw-sm:rounded-3">
                <slot name="logo"></slot>
            </div>
        </div>  -->
        <div class="tw-min-h-screen tw-flex tw-flex-col tw-sm:justify-center tw-items-center tw-pt-6 tw-sm:pt-0 tw-bg-gray-100">
            <div class="tw-w-full tw-sm:max-w-md tw-mt-6 tw-px-6 tw-py-4 tw-bg-white tw-shadow-md tw-overflow-hidden tw-sm:rounded-3">
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>