import NavLink from '../components/NavLink';



const ErrorView = (props) => {

    return (
        <>
            <div className="container mt-8 text-9xl">
                ERREUR 404
            </div>

            <div className="text-red-700 text-2xl font-bold mt-9">
                <NavLink classe="" text=">>>Retour à l'accueil<<< " link="/home" />
            </div>
        </>

    );
}


export default ErrorView;
