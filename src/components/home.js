import MovieImg from '../assets/Image/movie_black2.jpg';


function Home() {
    return (
        <div className='container text-center'>
            <div class="card rounded">
                <div class="card-header">
                    <div className='Logo'>MovieFinder</div>
                </div>
                <div class="card-body">
                    <img className="movie_img" src={MovieImg} width="450" height="450"/>
                </div>
            </div>
        </div>



    )
}
export default Home;