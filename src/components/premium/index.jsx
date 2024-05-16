import Button from "../button";

export default function Premium(){
return(
          <section className=" w-[350px] bg-[#F8E8EE] mb-4 rounded-2xl py-3 px-4 flex flex-col gap-2.5">
<h6 className="text-xl font-extrabold leading-6">Premium'a Abone Ol</h6>
<p className="leading-5 ">
Yeni özellikleri açmak için abone ol ve uygun olman durumunda reklam geliri payı kazan.
</p>
<div className="self-start">
     <Button>Abone Ol</Button>     
</div>

          </section>
)
}