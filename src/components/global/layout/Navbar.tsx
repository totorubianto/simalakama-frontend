import React, { Component } from 'react'
import styled from 'styled-components'
import { IPersonaSharedProps, Persona, PersonaSize, PersonaPresence } from 'office-ui-fabric-react/lib/Persona';

interface Props {
    toto?: any,
}
interface State {
}

const examplePersona: IPersonaSharedProps = {
    imageUrl: 'https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png',
    imageInitials: 'AL',
    text: 'Annie Lindqvist',
    secondaryText: 'Software Engineer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm'
  };

const NavbarStyle = styled.div`
    -webkit-box-shadow: 1px 10px 51px -1px rgba(153,153,153,0.28);
    -moz-box-shadow: 1px 10px 51px -1px rgba(153,153,153,0.28);
    box-shadow: 1px 10px 51px -1px rgba(153,153,153,0.28);
    border-bottom: 1px solid #e6e6e6;
    background: white;

    .nav{
        display:flex;
        &-brand{
            background:white;
        }
    }
`

class Navbar extends Component<Props, State> {
    state = {
        toto:"asdasd"
    }

    render() {
        return (
                <NavbarStyle>
                    <div className="nav container">
                        <div className="nav-brand">SIMALAKAMA</div>
                        <Persona {...examplePersona} size={PersonaSize.size40} presence={PersonaPresence.away} hidePersonaDetails={false} />
                    </div>
                    {this.props.toto} 
                </NavbarStyle>
        )
    }
}

export default Navbar
