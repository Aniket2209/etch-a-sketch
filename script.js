const heading = document.querySelector("h1");
heading.style.textAlign = "center";

const draw_area = document.querySelector(".draw_area");

for(let i=1; i<=256; i++)
{
    const div = document.createElement("div");
    div.id = `div${i}`;
    draw_area.appendChild(div);
}
