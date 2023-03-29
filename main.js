document.addEventListener('DOMContentLoaded', ()=>{
    // transition 1
    const T1 = document.querySelector('.transition1')
    const transition1 = () => {
        tnBtn1.removeEventListener('click', transition1)
        tnBtn1.classList.add('cursor-none')
        
        T1.querySelector('.page1').classList.add('active')
        setTimeout(()=>{
            T1.querySelector('.page3').classList.add('active')
        },[200])
        setTimeout(()=>{
            T1.querySelector('.page1').classList.remove('active')
            T1.querySelector('.page3').classList.add('active2')
        },[1000])
        setTimeout(()=>{
            T1.querySelector('.page3').classList.remove('active2')
            T1.querySelector('.page3').classList.remove('active')
            tnBtn1.addEventListener('click', transition1)
            tnBtn1.classList.remove('cursor-none')
        },[2000])
    }
    const tnBtn1 = document.querySelector('.btn-transition1')

    if(tnBtn1){
    tnBtn1.addEventListener('click', transition1)}
    // transition 1


    // transition 2
    const T2 = document.querySelector('.transition2')
    const transition2 = () => {
        tnBtn2.removeEventListener('click', transition2)
        tnBtn2.classList.add('cursor-none')
        
        T2.querySelectorAll('.pageX').forEach(pageX=>{
            pageX.classList.add('come')
        })
        setTimeout(()=>{
            T2.querySelectorAll('.pageX').forEach(pageX=>{
                pageX.classList.add('go')
            })
        },1200)
        setTimeout(()=>{
            T2.querySelectorAll('.pageX').forEach(pageX=>{
                pageX.classList.remove('come')
                pageX.classList.remove('go')
            })
            
            tnBtn2.addEventListener('click', transition2)
            tnBtn2.classList.remove('cursor-none')
        },2600)
        
    }
    const tnBtn2 = document.querySelector('.btn-transition2')
    if(tnBtn2){tnBtn2.addEventListener('click', transition2)}
    // transition 2


    // transition 3
    const T3 = document.querySelector('.transition3')
    const transition3 = () => {
        tnBtn3.removeEventListener('click', transition3)
        tnBtn3.classList.add('cursor-none')

        T3.classList.add('active')
        T3.querySelector('.images').classList.add('active')
        setTimeout(()=>{
            T3.querySelector('.images').classList.add('active2')
        },500)
        setTimeout(()=>{
            T3.querySelector('.images').classList.add('active3')
        },1100)
        setTimeout(()=>{
            T3.classList.remove('active')
        },1700)
        setTimeout(()=>{
            T3.querySelector('.images').classList.remove('active3')
            T3.querySelector('.images').classList.remove('active2')
            T3.querySelector('.images').classList.remove('active')
            tnBtn3.addEventListener('click', transition3)
            tnBtn3.classList.remove('cursor-none')
        },2000)
    }
    const tnBtn3 = document.querySelector('.btn-transition3')
    if(tnBtn3){
    tnBtn3.addEventListener('click', transition3)}
    // transition 3


    // transition 4
    const T4 = document.querySelector('.transition4')
    const transition4 = () => {
        document.body.classList.add("cursor-none1")
        T4.style.display = 'flex'
        setTimeout(() => {
            document.body.classList.remove("cursor-none1")
            T4.style.display = 'none'
        }, 4200);
    }
    const tnBtn4 = document.querySelector('.btn-transition4')
    if(tnBtn4){
    tnBtn4.addEventListener('click', transition4)}
    // transition 4

})