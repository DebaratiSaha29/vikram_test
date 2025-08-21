import React, { useEffect, useState } from 'react'
import { Form, FormGroup, Button, FormText,Input, Label, Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import Temp from './Temp'

const SecondCal = () => {
    const [formvalues, Setformvalues] = useState({
        flowrate: "",
        PH: "",
        TDS: "",
        height: "",
        width: "",
        vol: "",

    })

    // const [result, setResult] = useState({
    //     size: "",
    //     cost: "",
    //     volt: "",
    //     time: ""
    // })
    const [size, setSize] = useState("")
    const [cost, setCost] = useState("")
    const [volt, setVolt] = useState(" ")
    const [time, setTime] = useState("")



    useEffect(() => {

        console.log({ formvalues, size, cost })
    }, [formvalues, size, cost])

    const handleChange = (event, property) => {

        Setformvalues({ ...formvalues, [property]: event.target.value })

    }

    // const calculateSize = (formvalues) => {
    //     result.size = formvalues.height * formvalues.width;

    // }


    const showmessage = (event) => {
        event.preventDefault();
        console.log(formvalues)
        console.log("submitted")
        setSize(formvalues.height * formvalues.width)
        let temp = (formvalues.height * formvalues.width * 2.25) + 71;
        setCost(temp)
        setVolt(formvalues.flowrate * formvalues.width*formvalues.height*81.52)
        let temp2=formvalues.vol/(formvalues.height*formvalues.width)
        setTime(0.00024*temp2)
        console.log(size, cost, time)
        // setResult({calculateSize})
    }

    const resetAll = (event) => {
        event.preventDefault();
        console.log("reset")
        Setformvalues({
            flowrate: "",
            PH: "",
            TDS: "",
            height: "",
            width: "",
            vol: "",

        });
        setSize(" ")
        setCost(" ")
        setVolt(" ")
        setTime(" ")
    }

    return (
        
        <div className='vikram px-4' >
            {/* <Temp/> */}
            <Container className='container mt-5 '>
                <Row>
                    <Col className='px-8'>
                        <Form >
                            <Container className='text-center px-0'>
                                <h3 className='container_heading mt-4 mb-4'>
                                    Input Parameters
                                </h3>
                            </Container>
                            <FormGroup className='mx-0'>
                                <Label for="flowrate">
                                    Water Flow Rate (Litre/hour)
                                </Label>
                                <Input
                                    id="flowrate"
                                    name="flowrate"
                                    placeholder="Enter flowrate"
                                    type="Text"
                                    onChange={(e) => handleChange(e, 'flowrate')}
                                    value={formvalues.flowrate}
                                />
                            </FormGroup>
                            {/* <FormGroup>

                                <Label for="PH">
                                    pH (0-14)
                                </Label>
                                <Input
                                    id="PH"
                                    name="PH"
                                    placeholder="Enter pH"
                                    type="Text"
                                    onChange={(e) => handleChange(e, 'PH')}
                                    value={formvalues.PH}
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label for="TDS">
                                    TDS (mg/Lit)
                                </Label>
                                <Input
                                    id="TDS"
                                    name="TDS"
                                    placeholder="Enter TDS"
                                    type="text"
                                    onChange={(e) => handleChange(e, 'TDS')}
                                    value={formvalues.TDS}
                                />
                            </FormGroup> */}
                            <FormGroup>
                                <Label for="height">
                                    Length of the film (Meter)
                                </Label>
                                <Input
                                    id="height"
                                    name="height"
                                    placeholder="Enter length"
                                    type="text"
                                    onChange={(e) => handleChange(e, 'height')}
                                    value={formvalues.height}
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label for="width">
                                    Width of the film (Meter)
                                </Label>
                                <Input
                                    id="width"
                                    name="width"
                                    placeholder="Enter width"
                                    type="text"
                                    onChange={(e) => handleChange(e, 'width')}
                                    value={formvalues.width}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="width">
                                    Water volume to be cleaned (mL)
                                </Label>
                                <Input
                                    id="vol"
                                    name="vol"
                                    placeholder="Enter volume"
                                    type="text"
                                    onChange={(e) => handleChange(e, 'vol')}
                                    value={formvalues.vol}
                                />
                            </FormGroup>
                            {/* <FormGroup>
                    
                    
                </FormGroup> */}

                            <Container className="text-center p-5" >
                                <Button className="btn-success " size="lg" type="submit" onClick={showmessage}>
                                    Submit
                                </Button>

                            </Container>
                            <FormText>
                        *This program has 10% error margin
                        {/* <br/>
                        **Predicted parameters are rational upto 1m x 1m sample size */}
                    </FormText>

                        </Form>
                    </Col>
                    <Col md={{ size: 5, offset: 2 }}>
                        <Container className='text-center px-0'>
                            <h3 className='container_heading mt-4 mb-4'>
                                Predicted Parameters
                            </h3>
                        </Container>
                        <ListGroup className='result mt-0 mb-0' >
                            <ListGroupItem className='m-4 '>
                                Device Size (sq. meter)
                                <span className='span'>         {size}</span>
                            </ListGroupItem>
                            <ListGroupItem className='m-4'>
                                Predicted Cost (Rs)
                                <span className='span'>         {cost}</span>
                            </ListGroupItem>
                            <ListGroupItem className='m-4'>
                                Predicted Voltage (Volt)
                                <span className='span'>         {volt}</span>
                            </ListGroupItem>
                            <ListGroupItem className='m-4'>
                                Time taken to clean (min)
                                <span className='span'>         {time}</span>
                            </ListGroupItem>
                            {/* <ListGroupItem className='m-3'>
                                Vestibulum at eros
                            </ListGroupItem> */}
                        </ListGroup>
                        <Container className="text-center p-5" >

                            <Button className="mt-0" type="reset" size="lg" onClick={resetAll}>
                                Reset All
                            </Button>
                        </Container>
                        <FormText>
                        
                        **Predicted parameters are rational upto 1m x 1m sample size
                    </FormText>

                    </Col>
                </Row>


            </Container>
        </div>

    )
}

export default SecondCal