let Cars = React.createClass({
    render: function () {
        let data = this.props.data;
        let carsTemplate;

        if (data.length > 0) {
            carsTemplate = data.map(function (item, index) {
                return (
                    <li key={index}>
                        <a href="#" className="car-photo"><img src={item.image} height="130"/></a>

                        <h2>{item.name}</h2>
                        <ul className="car-description">
                            <li><span>Manufacturer: </span>{item.manufacturer}</li>
                            <li><span>Yaer: </span>{item.year}</li>
                            <li><span>Mileage: </span>{item.mileage} km</li>
                        </ul>
                        <p className="car-price">{item.priceDollar}$</p>
                        <button>Top!</button>
                    </li>
                )
            })
        } else {
            carsTemplate = <p>No ads</p>
        }

        return (
            <ul className="cars-list">
                {carsTemplate}
            </ul>
        );
    }
});

let App = React.createClass({
    render: function () {

        return (
            <div className='main-contentе'>
                <h3>AV.BY</h3>
                <Cars data={cars.slice(0,25)}/>
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('root')
);