import React, { Component } from 'react';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input
  } from 'reactstrap';
import { connect } from 'react-redux';
import { getAvatar, updateAvatar } from '../actions/avatarActions';
import PropTypes from 'prop-types';
import Avatar from 'avataaars';

class CustomizeAvatar extends Component {
    state = {
        top: 'LongHairStraight',
        facialHairType: 'Blank',
        clotheType: 'Hoodie',
        eyeType: 'Happy',
        eyebrowType: 'Default',
        mouthType: 'Smile',
        skinColor: 'Light'
    };

    static propTypes = {
        getAvatar: PropTypes.func.isRequired,
        avatar: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    };

    componentDidMount() {
        this.props.getAvatar();
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const { top, facialHairType, clotheType, eyeType, eyebrowType, mouthType, skinColor } = this.state;

        // Create avatar object
        const newAvatar = {
        top,
        facialHairType,
        clotheType,
        eyeType,
        eyebrowType,
        mouthType,
        skinColor
        };

        // Update avatar
        this.props.updateAvatar(newAvatar);
    };

    render() {
        return (
            <div>
                <Avatar
                    style={{width: '200px', height: '200px', marginLeft: 'auto', marginRight: 'auto', display: 'block'}}
                    avatarStyle='Transparent'
                    topType={this.state.top}
                    facialHairType={this.state.facialHairType}
                    clotheType={this.state.clotheType}
                    eyeType={this.state.eyeType}
                    eyebrowType={this.state.eyebrowType}
                    mouthType={this.state.mouthType}
                    skinColor={this.state.skinColor}
                    />
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="top">Top</Label>
                        <Input type="select" name="top" id="top" onChange={this.onChange}>
                            <option value="NoHair">NoHair</option>
                            <option value="Eyepatch">Eyepatch</option>
                            <option value="Hat">Hat</option>
                            <option value="Hijab">Hijab</option>
                            <option value="Turban">Turban</option>
                            <option value="WinterHat1">WinterHat1</option>
                            <option value="WinterHat2">WinterHat2</option>
                            <option value="WinterHat3">WinterHat3</option>
                            <option value="WinterHat4">WinterHat4</option>
                            <option value="LongHairBigHair">LongHairBigHair</option>
                            <option value="LongHairBob">LongHairBob</option>
                            <option value="LongHairBun">LongHairBun</option>
                            <option value="LongHairCurly">LongHairCurly</option>
                            <option value="LongHairCurvy">LongHairCurvy</option>
                            <option value="LongHairDreads">LongHairDreads</option>
                            <option value="LongHairFrida">LongHairFrida</option>
                            <option value="LongHairFro">LongHairFro</option>
                            <option value="LongHairFroBand">LongHairFroBand</option>
                            <option value="LongHairNotTooLong">LongHairNotTooLong</option>
                            <option value="LongHairShavedSides">LongHairShavedSides</option>
                            <option value="LongHairMiaWallace">LongHairMiaWallace</option>
                            <option value="LongHairStraight">LongHairStraight</option>
                            <option value="LongHairStraight2">LongHairStraight2</option>
                            <option value="LongHairStraightStrand">LongHairStraightStrand</option>
                            <option value="ShortHairDreads01">ShortHairDreads01</option>
                            <option value="ShortHairDreads02">ShortHairDreads02</option>
                            <option value="ShortHairFrizzle">ShortHairFrizzle</option>
                            <option value="ShortHairShaggyMullet">ShortHairShaggyMullet</option>
                            <option value="ShortHairShortCurly">ShortHairShortCurly</option>
                            <option value="ShortHairShortFlat">ShortHairShortFlat</option>
                            <option value="ShortHairShortRound">ShortHairShortRound</option>
                            <option value="ShortHairShortWaved">ShortHairShortWaved</option>
                            <option value="ShortHairSides">ShortHairSides</option>
                            <option value="ShortHairTheCaesar">ShortHairTheCaesar</option>
                            <option value="ShortHairTheCaesarSidePart">ShortHairTheCaesarSidePart</option>
                        </Input>
                        <Label for="facialHairType">Facial Hair</Label>
                        <Input type="select" name="facialHairType" id="facialHairType" onChange={this.onChange}>
                            <option value="Blank">Blank</option>
                            <option value="BeardMedium">BeardMedium</option>
                            <option value="BeardLight">BeardLight</option>
                            <option value="BeardMagestic">BeardMagestic</option>
                            <option value="MoustacheFancy">MoustacheFancy</option>
                            <option value="MoustacheMagnum">MoustacheMagnum</option>
                        </Input>
                        <Label for="clotheType">👔 Clothes</Label>
                        <Input type="select" name="clotheType" id="clotheType" onChange={this.onChange}>
                            <option value="BlazerShirt">BlazerShirt</option>
                            <option value="BlazerSweater">BlazerSweater</option>
                            <option value="CollarSweater">CollarSweater</option>
                            <option value="GraphicShirt">GraphicShirt</option>
                            <option value="Hoodie">Hoodie</option>
                            <option value="Overall">Overall</option>
                            <option value="ShirtCrewNeck">ShirtCrewNeck</option>
                            <option value="ShirtScoopNeck">ShirtScoopNeck</option>
                            <option value="ShirtVNeck">ShirtVNeck</option>
                        </Input>
                        <Label for="eyeType">👁 Eyes</Label>
                        <Input type="select" name="eyeType" id="eyeType" onChange={this.onChange}>
                            <option value="Close">Close</option>
                            <option value="Cry">Cry</option>
                            <option value="Default">Default</option>
                            <option value="Dizzy">Dizzy</option>
                            <option value="EyeRoll">EyeRoll</option>
                            <option value="Happy">Happy</option>
                            <option value="Hearts">Hearts</option>
                            <option value="Side">Side</option>
                            <option value="Squint">Squint</option>
                            <option value="Surprised">Surprised</option>
                            <option value="Wink">Wink</option>
                            <option value="WinkWacky">WinkWacky</option>
                        </Input>
                        <Label for="eyebrowType">✏️ Eyebrow</Label>
                        <Input type="select" name="eyebrowType" id="eyebrowType" onChange={this.onChange}>
                            <option value="Angry">Angry</option>
                            <option value="AngryNatural">AngryNatural</option>
                            <option value="Default">Default</option>
                            <option value="DefaultNatural">DefaultNatural</option>
                            <option value="FlatNatural">FlatNatural</option>
                            <option value="RaisedExcited">RaisedExcited</option>
                            <option value="RaisedExcitedNatural">RaisedExcitedNatural</option>
                            <option value="SadConcerned">SadConcerned</option>
                            <option value="SadConcernedNatural">SadConcernedNatural</option>
                            <option value="UnibrowNatural">UnibrowNatural</option>
                            <option value="UpDown">UpDown</option>
                            <option value="UpDownNatural">UpDownNatural</option>
                        </Input>
                        <Label for="mouthType">👄 Mouth</Label>
                        <Input type="select" name="mouthType" id="mouthType" onChange={this.onChange}>
                            <option value="Concerned">Concerned</option>
                            <option value="Default">Default</option>
                            <option value="Disbelief">Disbelief</option>
                            <option value="Eating">Eating</option>
                            <option value="Grimace">Grimace</option>
                            <option value="Sad">Sad</option>
                            <option value="ScreamOpen">ScreamOpen</option>
                            <option value="Serious">Serious</option>
                            <option value="Smile">Smile</option>
                            <option value="Tongue">Tongue</option>
                            <option value="Twinkle">Twinkle</option>
                            <option value="Vomit">Vomit</option>
                        </Input>
                        <Label for="skinColor">🎨 Skin</Label>
                        <Input type="select" name="skinColor" id="skinColor" onChange={this.onChange}>
                            <option value="Tanned">Tanned</option>
                            <option value="Yellow">Yellow</option>
                            <option value="Pale">Pale</option>
                            <option value="Light">Light</option>
                            <option value="Brown">Brown</option>
                            <option value="DarkBrown">DarkBrown</option>
                            <option value="Black">Black</option>
                        </Input>
                        <Button color='dark' style={{ marginTop: '2rem' }} block>
                            Save Change
                        </Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    avatar: state.avatar,
    isAuthenticated: state.auth.isAuthenticated
  });

export default connect(
    mapStateToProps,
    { getAvatar, updateAvatar }
)(CustomizeAvatar);