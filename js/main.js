var scroll     = document.querySelector('.sticky-scroll');
var scrollItem = document.querySelectorAll('.stick');

const handleScroll = (evt) =>
{
    let sectionId = evt.srcElement.className.split(" ", 1);
    document.getElementById(`${sectionId}`).scrollIntoView({behaviour: 'smooth'});
    // console.log(evt.srcElement.className.split(" ", 1));

    // console.log(scrollItem.length);
    for(let i=0;i<scrollItem.length;i++) 
    {
        scrollItem[i].classList.remove('stick-active');
    }

    evt.srcElement.classList.add('stick-active')

    console.log(evt.srcElement);
}

scroll.addEventListener('click', handleScroll);
