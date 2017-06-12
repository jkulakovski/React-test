class FilterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Manufacturer: 'Volkswagen',
            Mark:'Passat',
            Year:'2000',
            Price: '15000',
            transmission: '',
            fuel: '',
            Mileage: '',
            Capacity: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        const manufacturer = this.state.Manufacturer;
        const mark = this.state.Mark;
        const year = this.state.Year;
        const price = this.state.Price;
        const transmission = this.state.transmission;
        const fuel = this.state.fuel;
        const mileage = this.state.Mileage;
        const capacity = this.state.Capacity;
        alert('Filter:' + '\n' + manufacturer + '\n' + mark + '\n' + year + '\n'
            + price + '$' + '\n' + transmission + '\n' + fuel + '\n' + mileage + 'km' + '\n' + capacity);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <ul>
                    <li>
                        Manufacturer:
                        <select value={this.state.value} name="Manufacturer" onChange={this.handleChange}>
                            <option value="volkswagen">Volkswagen</option>
                            <option value="mercedes-benz">Mercedes-Benz</option>
                            <option value="bmv">BMW</option>
                            <option value="audi">Audi</option>
                            <option value="volvo">Volvo</option>
                        </select>
                    </li>

                    <li>
                        Mark:
                        <select value={this.state.value} name="Mark" onChange={this.handleChange}>
                            <option value="passat">Passat</option>
                            <option value="polo">Polo</option>
                            <option value="golf">Golf</option>
                            <option value="s-klasse">S-Klasse</option>
                            <option value="a-klasse">A-Klasse</option>
                            <option value="m-klasse">M-Klasse</option>
                            <option value="x4">X4</option>
                            <option value="x5">X5</option>
                            <option value="x6">X6</option>
                            <option value="a4">A4</option>
                            <option value="a6">A6</option>
                            <option value="a8">A8</option>
                            <option value="s40">S40</option>
                            <option value="s60">S60</option>
                            <option value="xc90">XC90</option>
                        </select>
                    </li>
                    <li>
                        Year:
                        <input value={this.state.value}
                               name="Year"
                               onChange={this.handleChange}
                               type="range"
                               min="1990"
                               max="2017"
                               step="1"/>
                    </li>
                    <li>
                        Price:
                        <input value={this.state.value}
                               name="Price"
                               onChange={this.handleChange}
                               type="range"
                               min="0"
                               max="20000"
                               step="500"/>
                    </li>
                    <li>
                        Transmission
                        <p>Mechanics: <input type="radio" name="transmission" onChange={this.handleChange} value="Mechanics" /></p>
                        <p>Automatic: <input type="radio" name="transmission" onChange={this.handleChange} value="Automatic"/></p>
                    </li>
                    <li>
                        Fuel
                        <p>Diesel: <input type="radio" name="fuel" onChange={this.handleChange} value="Diesel"/></p>
                        <p>Petrol: <input type="radio" name="fuel" onChange={this.handleChange} value="Petrol"/></p>
                        <p>Electro: <input type="radio" name="fuel" onChange={this.handleChange} value="Electro"/></p>
                    </li>
                    <li>
                        Mileage:
                        <input type="number" value={this.state.value} name="Mileage" onChange={this.handleChange} />
                    </li>
                    <li>
                        Capacity:
                        <input type="number" value={this.state.value} name="Capacity" onChange={this.handleChange} />
                    </li>
                </ul>
                <input type="submit" value="Apply"/>
            </form>
        );
    }
}

ReactDOM.render(
    <FilterForm />,
    document.getElementById('root')
);