var scroll     = document.querySelector('.sticky-scroll');
var scrollItem = document.querySelectorAll('.stick');

const handleScroll = (evt) =>
{
    console.log(scrollItem.length);
    for(let i=0;i<scrollItem.length;i++) 
    {
        scrollItem[i].classList.remove('stick-active');
    }

    evt.srcElement.classList.add('stick-active')

    console.log(evt.srcElement);
    // scrollItem.classList.add('stick-active');
}

scroll.addEventListener('click', handleScroll)