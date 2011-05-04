{extends file="layout.tpl"}
{block name=content}
{foreach $emps as $emp}
    <div class="span-9 {cycle name="empBlocks" values=" ,last"}">
        <div class="span-4">
            <div class="imgCont">
                <img src="/img/{$emp.photo}" />
            </div>
        </div>
        <div class="span-5 last">
            <div class="span-5 last">
                <div class="nameCont">
                    {$emp.name}
                </div>
            </div>
            <div class="span-5 last">
                <div class="{cycle name="colBlocks" values="brown,purp,blue"}Cont">
                </div>
            </div>
        </div>
        <div class="span-9 last">
            <p class="bio">
                {$emp.bio}
            </p>
        </div>
    </div>
{/foreach}
{/block}
