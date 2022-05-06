let body=document.querySelector('body')
let periodDaily= document.querySelector('#period-daily')
let periodWeekly= document.querySelector('#period-weekly')
let periodMonthly= document.querySelector('#period-monthly')
let weekly= document.querySelectorAll('.weekly')
let daily= document.querySelectorAll('.daily')
let monthyl=  document.querySelectorAll('.monthyl')

periodDaily.addEventListener('click', e => {
  daily.forEach(el => el.style.display= 'block')
  weekly.forEach(el => el.style.display= 'none')
  monthyl.forEach(el => el.style.display ='none')
  periodDaily.style.color='white'
  periodMonthly.style.color='hsl(235, 45%, 61%)'
  periodWeekly.style.color='hsl(235, 45%, 61%)'
})

periodWeekly.addEventListener('click', e => {
  weekly.forEach(el => el.style.display= 'block')
  daily.forEach(el => el.style.display= 'none')
  monthyl.forEach(el => el.style.display ='none')
  periodWeekly.style.color='white'
  periodMonthly.style.color='hsl(235, 45%, 61%)'
  periodDaily.style.color='hsl(235, 45%, 61%)'
})

periodMonthly.addEventListener('click', e => {
  weekly.forEach(el => el.style.display= 'none')
  daily.forEach(el => el.style.display= 'none')
  monthyl.forEach(el => el.style.display ='block')
  periodMonthly.style.color='white'
  periodWeekly.style.color='hsl(235, 45%, 61%)'
  periodDaily.style.color='hsl(235, 45%, 61%)'
})

