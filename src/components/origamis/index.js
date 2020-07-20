import React, {Component} from 'react';
import styles from './index.module.css';
import Origam from '../origam';

class Origamis extends Component {

    constructor(props) {
        super(props)

        this.state = {
            origamis:[]
        };
    };

    renderOrigamis() {
        
        const {origamis} = this.state;

        return origamis.map(origam => {

          return <Origam key={origam._id} {...origam}/>

        });
    };

    getOrigamis = async()=> {
        console.log('Pisna mi')
        const promise = await fetch('http://localhost:9999/api/origami');

        const origamis = await promise.json();

        this.setState({
            origamis
        })
    };
    
    componentDidMount() {
        
        this.getOrigamis()
    };

    render() {
        console.log(this.state.origamis)
        return(
            <div className={styles.container}>
                <h1 className={styles.title}>Origamis</h1>
                <div>
                    {this.renderOrigamis()}
                </div>
            </div>
        );
    };
};

export default Origamis