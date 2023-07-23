<div class="h-full w-full flex flex-row flex-wrap">
    <div class="h-[70vh] md:h-auto md:min-h-[450px] w-full md:w-[45%] gap-2 pb-2 md:pb-0 md:pr-2 grid grid-cols-[2fr_3fr] grid-rows-[3fr_7fr]">
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
    <div class="h-[70vh] md:h-auto w-full md:w-[55%] gap-2 grid grid-cols-[1fr_1fr] grid-rows-[2fr_1fr_1fr]">
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