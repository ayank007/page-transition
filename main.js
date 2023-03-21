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
tnBtn1.addEventListener('click', transition1)
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
tnBtn2.addEventListener('click', transition2)
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
tnBtn3.addEventListener('click', transition3)
// transition 3