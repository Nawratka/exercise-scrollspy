const menuItems = document.querySelectorAll('a')
const scrollSpySections = document.querySelectorAll('.section')
const lastSection = document.querySelector('a:last-of-type')


const handleScrollSpy = () => {
    if(document.body.classList.contains('main-page')) {

        const sections = []

        scrollSpySections.forEach(section => {
            // console.log(section);
            // console.log(window.scrollY);
            // // wartość scrolla
            // console.log(section.offsetTop, 'section ofset top');
            // // odległośc danej sekcji od górnej krawędzi przeglądarki
            // console.log(section.offsetHeight, 'sect ofs height');
            // // wysokość każdej z sekcji
            // console.log(section);

            if(window.scrollY <= section.offsetTop + section.offsetHeight -103) {
                sections.push(section)
               
                const activeSection = document.querySelector(`[href*="${sections[0].id}"]`)
                
                menuItems.forEach(item => item.classList.remove('active'))

                activeSection.classList.add('active')
            }

            if ( window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
            // console.log(section);
            // console.log(window.innerHeight, 'window inner height');
            // // kvkvkvk
            // console.log(window.scrollY, 'window scrollY');
            // // wartość scrolla

            // console.log(document.body.offsetHeight, 'ofset height');
            // console.log(section);

                menuItems.forEach(item => item.classList.remove('active'))

                lastSection.classList.add('active')
            }

        })
    }
}


window.addEventListener('scroll', handleScrollSpy)