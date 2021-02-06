<template>
    <div>
        <p>Ini kalender Saya</p>
        <slot name="h2"></slot>
        <slot  name="h1"></slot>
        <div class="r-center-flex r-mlr-10 r-ptb-10">
            <p class="r-mlr-auto">Test</p>
        </div>
        <div class="r-center-flex r-columns r-isWrap">
            <div class="r-column-2 r-mtb-10 r-primary-bg r-white-text">test</div>
            <div class="r-column-2 r-mtb-10 r-primary-bg r-white-text">test</div>
            <div class="r-column-2 r-mtb-10 r-primary-bg r-white-text">test</div>
            <div class="r-column-2 r-mtb-10 r-primary-bg r-white-text">test</div>
        </div>
        <button class="r-primary-filled-btn r-ptb-10">Test</button>
    </div>
</template>