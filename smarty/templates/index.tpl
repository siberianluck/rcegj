{extends file="layout.tpl"}
{block name=content}
<div class="span-9">
    <div id="about" class="aboutPage">
    <p>
    <span id="RCE">Rolland Consulting Engineers</span> is a civil engineering and land surveying firm providing efficient engineering solutions to municipalities, property owners, land developers, and contractors in western Colorado.  Formerly known as Rolland Engineering, we changed our name after Tom Rolland's retirement.  We have a small foot-print but we have a great track record for projects of all sizes.  We've been providing quality ideas to Mesa County and western Colorado since 1983.
    </p>
    </div>
</div>
<div onload="initializeMap()" class="span-9 last">
    <div class="aboutPage">
    <div id="map_canvas"></div>
    </div>
</div> 
<div class="span-9">
    <div class="aboutPage">
    <img class="layoutImg" id="aboutImg" src="/img/aboutPage.jpg" />
    </div>
</div>
<div class="span-9 last">
    <div class="aboutPage">
    <div id="contact">
        <span>Contact Us</span><br />
        <span>By Phone: {$phone}</span><br />
        <span>By E-mail: <a href="mailto:{$email}">{$email}</a></span><br />
        <span>In Person: {$address}</span><br />
    </div>
    </div>
</div>
{/block}
