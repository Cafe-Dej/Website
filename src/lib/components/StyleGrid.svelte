<div class="max-h-full w-full flex flex-row flex-wrap">
    <div class="h-[min(70vh,100%)] md:h-full w-full md:w-[45%] gap-3 pb-3 md:pb-0 md:pr-3 grid grid-cols-[2fr_3fr] grid-rows-[3fr_7fr]">
        <div>
            <slot name="left-split-left">
               split
            </slot>
        </div>
        <div>
            <slot name="left-split-right">
                split
            </slot>
        </div>
        <div class="col-span-2">
            <slot name="left-whole">
                whole
            </slot>
        </div>
    </div>
    <div class="h-[min(70vh,100%)]  md:h-full w-full md:w-[55%] gap-3 grid grid-cols-[1fr_1fr] grid-rows-[2fr_1fr_1fr]">
        <div class="col-span-2">
            <slot name="right-whole">
                whole
            </slot>
        </div>
        <div class="row-span-2">
            <slot name="right-split">
                split
            </slot>
        </div>
        <div>
            <slot name="right-split-upper">
                dual-split
            </slot>
        </div>
        <div>
            <slot name="right-split-lower">
                dual-split
            </slot>
        </div>
    </div>
</div>