import React from 'react'

class feeds extends React.Component {
    state={
        feeds:null
    }   
    async componentDidMount(){
        const resp = await fetch('https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=WaKkmlfgbOg9OwQkoHOOKLW89LedGlCEnJ5u90Z4')
        const data = resp.json()
        this.setState({feeds})
    }
    render(){
        const {feeds} = this.state
        return(
            <div>
                {
                feeds &&
                feeds.map(({...f}) => <Feed key={f.id} {...f}/>)
                }
            </div>
        )
    }
}
export default feeds;
