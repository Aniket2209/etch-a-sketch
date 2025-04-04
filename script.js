function rgbvalue()
{
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`;
}
function resize(value)
{
    if(value>0 && value<=100)
    {
        draw_area.innerHTML = "";
        document.documentElement.style.setProperty("--divider", value);
        const fragment = document.createDocumentFragment();
        for(let i=1; i<= value*value; i++)
        {
            const div = document.createElement("div");
            div.id = `div${i}`;
            div.addEventListener("mouseenter", () => {
                div.style.backgroundColor = rgbvalue();
            })
            div.addEventListener("mouseleave", () => {
                div.style.backgroundColor = "";
            })
            fragment.appendChild(div);
        }
        draw_area.appendChild(fragment);
    }
    else
    {
        alert("Value entered is greater than 100 or less than 0!");
    }
}
const heading = document.querySelector("h1");
heading.style.textAlign = "center";

const resize_btn = document.querySelector("button");
resize_btn.style.display = "block";
resize_btn.style.margin = "0 auto";
resize_btn.style.marginBottom = "10px";
resize_btn.addEventListener("click", () => 
{
    let val = prompt("Input new SketchPad size!");
    resize(val);
});

const draw_area = document.querySelector(".draw_area");

for(let i=1; i<=256; i++)
{
    const div = document.createElement("div");
    div.id = `div${i}`;
    div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = rgbvalue();
    });
    div.addEventListener("mouseleave", ()=>
    {
        div.style.backgroundColor = "";
    });
    draw_area.appendChild(div);
}