import { Component } from 'react';

export default class Loader extends Component { 

   state = {
    images: []
}
    
componentDidLoader(prevProps, prevState) {
    const prevName = prevProps.searchName;
    const nextName = this.props.searchName;
    if (prevName !== nextName) {
        console.log('name change')

    //  this.setState({loading: true})
    //     fetch(`https://pixabay.com/api/?q=${nextName}&page=1&key=35788801-dce36e820ecbf028522772f28&image_type=photo&orientation=horizontal&per_page=12`)
    //     .then(res => res.json())
    //     .then(images => this.setState({ images }))
    //     .finally(() => this.setState({ loading:false}))
        this.setState({loading: true})
        setTimeout(() => {
            fetch(`https://pixabay.com/api/?q=${nextName}&page=1&key=35788801-dce36e820ecbf028522772f28&image_type=photo&orientation=horizontal&per_page=12`)
        .then(res => res.json())
        .then(images => this.setState({ images }))
        .finally(() => this.setState({ loading:false}))
        },3000)
    }
    }

    render() {
        const { images, loading } = this.state
        const {searchName} = this.props

        return (
            <div>
                {loading && <div>Loading...</div>}
                {!searchName && <div>Шо хочеш?</div>}
                {images && <div>{ images.nextName}</div>}
            </div>
        )
    }
}