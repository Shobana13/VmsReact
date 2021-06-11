import React from "react";
import { Card, Row, Col, Button, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setdrivers } from "../actions/driver-actions";
import driver_reducer from "../reducers/driver_reducer";
import driver_Types from "../services/driver_Types";
import NavBar from "./NavBar";


const { useEffect } = React;

const axios = require("axios");

function DriverHome() {
    const drivers = useSelector((state) => state.driver.drivers);
    const dispatch = useDispatch();

    const getDriverList = async () => {
        const { data } = await axios.get("http://localhost:8081/api/driver");
        console.log(data)

        dispatch(setdrivers(data));
    };

    useEffect(() => {
        getDriverList();
    }, []);
    console.log(drivers);

    return (
        <div>
            <NavBar/>
                    <Container style={{ marginTop: "51px" }}>
                        <Row xs={1} md={3} className="g-4">
                            {drivers.length &&
                                drivers.map((driver) => (
                                    <Col key={driver.driverId}>
                                        <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top"  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANkAAADpCAMAAACeGmLpAAABNVBMVEX39/cAIlXV9v//17ZQLRb/zKr+/v0AEU6DiZzT9///1rQAAEkAAEf/1bH5+fn/067c+P7/373Z+/8AH1T/27oAAE5OKhFAGAD/z63e//8ACUsAFk8AGlFFEgDx+PlDHABJIgDo+fv038j/yaNKIABFGAA7DwBJJApYNiA+FAD527+rxtWdt8cADkzn5OJnSzuSgXernpfJwbyEcGTb1tK5mX6nh27pxaZ/YUq2yMpgQCrv49Lk6+Pf7u3p59zF4+50anXR1d1wfJUhOGXAxc9QUGiUna+yuMVjcIy8s65yWUuzp6GPfXPTzMg+BwBlRzbTspSTdFyorKmCfnhjTT9yY1iwwcLHpYmTlJF4WUM4AACmiYJFWXuUgYA3S3FfXG6kv84yO1/DpJQaLlyBc3mdpLU/UHWg8FY2AAAMlElEQVR4nO2d+1/aWBPGIWgQiId7QEDBCkVtvVUtXXpBQa1t31ba3a7bV23XWvf//xM2F67hJDlzMkDi8vy2+9nNyTcz88ycQ0Cfb6aZZppppplm+i+LECIapPyrad+VU6lQZPvju73d/fc79fr6ev1iZ393792BT8Wb9t1xS6Hafrb3fq6yUSmXSlW5o2qpXFku7+w+83kTTsE62HtfqZSr8hxNcnmjtK/CTftGgSLi9oed5SIdqqfShry37Sk2hWu3XLHB6kSususdNoXrf8slBixd5cqezxtohOxV2LlUVeofvRA28aBeAXGpOflp1/VoRNz7xFJfI2Hb2XY3GvHtL3NwKSrJB+K0795CZPuizAemZGTlo3vRyPY6zDqG0ZZdi6aAVfnBVDSXJiTx1R2BKWglV9oIEd87SEVd1bobe7a4C25joyrvuy8fxWefnIPNzT3+4DY04ivxNOhRLbut1MR9x0Wmq/TeXUEjH01zUc6UQWjL71wVNPHCLBcz9Xb7MYRMnnOTP5J3JtNitXgYT8WfZyBolT335CMhdXrINl4EUoFAIP4N0sLlknuCJj7boAasehkP6FqHGGfRPUETd2gxKX4LpzpgqRoV3SxosluCRg5oVfb4eTdgKtolBK3yziVBE3dHe5lcbA+AKaX2uchOVnVJTyM+eaSKqnO1VGBIKdO+QJFLBhHybCQZq/WAASyQCgP8sewODxlNxurFCJiCBmjY8oUryIjR0qsXo1xqqQEa9vKBC9JxxBmVVKQr/oI5IYsf3ED2YXjHKa9TUhHasF3hjsb9S9XoigOlxtywXTFhrQ4H4nHbFEx1kQ3GqE2/0FZijaEyyxzGzcHUqM2x1Vrly8p0wWJC4rdBsuoLSzAFLfCCKWyl35dWp8i1IghC4ku5fz/ynDWXqnh73WTQGiSW/1gSYlMDWxVUst8HyDasiqwXttThHO1j3uL6wL+VZSEkhKYUtpgKJix97VujbS72UvKwnjHUm1xtx2sDG9jlRki5+jTCtiLoWhqYdItMXBpbvP25mum/dSBn6kqzSNX6T2n5t4QwFbTVDpiQ6A/6RWtfNLKl2s8vSplMsVjMZC4O49qxwmGvBCt/JvQFJuyRq6EumdCbQOR1hiIbgkvFA7X25eVlOxzv/K+pXnOsfOmQCRMttliPK9RvZ8VLIJlOp6r/j72glXtkk0Trgw2QgUNGV4/srx7Z5NAGwAYadfEQgyz+uTpKNikfGQQbIKsicKmTZYZCNhm0IbA+WfU5SjIG4h0PGSabBNowWJ9sw3zzAiN7XqWRjR/NANYjk78BepmVlI0OlWzcNmIE65Hh+IeqTjoOuP4k0FaNYD2yTA0JrJuOlRGycaKNgnXJ0JKxd6TQmRsHFRrboLUyCtbt1CW0ZOymoz7rGzQuMgqYIDQqejIikmnpWKEtNiaDHHEPXWWtzvDA9HSU6yPJqGospUYpMlVLau7IjFtONsW/yeo5CHW5MZQarcg0sq9V3DLTJyyKNerCJzMBExJ/KemYYTn/YFf8QqYaiCr0UjPJxY7tZzC5VLLSH/RkFNBLzSwXVbS6jLQ165PVl82SUekzuGQmvqiRfakg9mmdbL1kvh5uPprmoqa50mdcslTFOA4PCdEfV0yquRO0P/+Pao2BQLhs+SQR/dEiF1UtfeU527FQzbzKNKGZiIV9aAo10AZ9XZuWOYJoIjYhU1baDGOChe3IsIJmFzKFLIVKFnhkR4a0n7ENmSDggoVtyXCCZh+yKZChVBpDyGKLuGQvbckwgsYSsimQIQSNIWToZG/syRCCxrDIVMgcT4/WE+OYyF6xPE6nxs8Chk22yETmMGgs/oFP9pqFzOFczOIfYyBjWtWZhzA9PHQyxufpBIwtGYUY7gzCSOYoHRmXwJ6uGFd1ko5sySiEUMECAUYyB+nImIzIu5hwivWB8pMxtWkBe+dpv/Hsir9Zs5ZZ6BEiGICMv9BYVwi9RI2Z/fasI+5CYy0zbDKGTUxnXV4y1jITQm+mQ8ZdaKxlJoReYQ4hTJsYXbyFxnp9QXiNSsY06mviLTTmBXAHR8ZRXxMfGLOBIA8hjKO+ti4fGbOBILdq1oFYFZ+FQMgeIZKxDsSq+CwE8OgwbZ95bOQnAzw6TNtnH64EXnMEkGHaPvtwxU0GWEAQEMnYRxBOMoDpo+7QACOIwNfQYGR45sh22thdd/xkeOYIGUH4yADtDNUcIY16AtmIOTmCnIvn26CgmOFNjqB2xjdeAcmwjkJA7WwiZFgHBjDTnwQZloWATJ+PDOYgaBYCs8ZJkGFNIWFQyCbgjVhTCNAaJxIznCkENA8Lk+jUQghnIwOarZRVuX63AfbwBGHTOVoYCMZ5xAMlC710igYGm8CeWkd7HXZUa+FADPo0+chgjUVDiznJyHAKDDb+s6s+28tF3rCFNwUwGCcZsKF10HgzUgHj0NhPUgfRhEdcGRmFpyI3GbCh9dnecKBl16C2qC3FBQa3/d568KadnV+D7V508X7KxGMhOtkaEC07Pz8P23FOiezV2nwWAjavCnb+oYv3M08+C1GtX71TZosMz+viIOP9nJrbQja1O2UMW7YDtsaRIpxg3BYS6twrU9i6YPMc5sj/4hVnocXWundrG7ZuJqpkcHPkf4eHs1e/WevfrzVbdn5AcHN08JI0H9nm4P1apeQQGIc58oPxpWNobeiGTcM2zKWkI5TMyZubPOmodjODspS4LRr/I7g5Onljn8f3DclIZzPGSyODnaE6fK2dIx1jIyEzJmWYxqUIeGzl7KsI8HTUBxATuOxiNmuCNQ82R4dfH4GTmYSMQUBzdAYGTsehZgYUzBydfk0L6iEhewBzMtB85RAMmI6hhIOQwczR+a8XML/ZnkgsLTWemvsDg14uJRLW337vC+F7xyzPUaGKNZ6eJ3NHUQdg2atW82lDUPDs18T4wQmboKmxEp6cXeekXD7p36o5IIve5IKSFPnexbPiQ/lCtfkCegI2byVpq+DXlHcStOgP7SoFBS94vfC0kTCPHs5vhNCDpofq3C9Fgkl/X+k2f6VFg73LJAvBiFS4Xvi7sUTFQ/rhAuOFuwkY1BJwWMlb7qBlf+YM11Lx/NdnTzQ8/JANB02BSigJ2IooCWik0pS74UVbPC1QrpcsbEnS3fkwHtqvugwkYOPs/M6QgAbx5mP2Z9r0msl8Toq0FDxBS068X+JZ1RKw8WThOk9JQONd+DnJ7uwurOE1FTwR5++Rq3/vXHNA0wQ0KH/Kk4+LP4L2l9bxtr433x47/pPdRPQd39sloEHBo9ENsy3YTYT5+v5CPhfJN7ed/KkLIh5fFyK2CWgUfBSJXpkXGV3JYOSMP2yENCUolaYIEC16AwXTVrnm/TMe4nYrZ399qnI/LPbORmWzRzxgSkXf8f39JvEkR2swbAre1ljDFm3fMpkHRQU/D5p4EuFJxK6SW1dRlrBlszcO1sm34AkpHktOwBSlT+3Dlo3+vNtyskjwGuqQZDvnEEzJlfSvmmXcotGft2mHy0hnMDTia/HXWF/B3K+2CVs2G63d3EWcryIdg/JRbPK6okH59OlVLRoddkqFKlq7Ok0Dur+5Ci1I0MQTCWHNzspb6dtfP2sKTFfZ9tVRKx3ESApVEUA+Ep8f42n2pAx76cjd6Y+jo6Mfp7fJdGSLq/+bKcJu/eICUi4OKlko5PP5QiGJ+tBUBc9Zg0a2AdOpG8RsImKTdyaYkvKMQfNcyJiDJi54LGSsQSO+LfQaH7uYgibej8EYx61gkyFoYst7IWPqaeQYb/yYoHL2g4jYzE/7LnmUvLM7pyM+ppM39yny1o7sxHPNTFfBbgvq0WT023oI8eEPrBPSlrWHEMSN2YSVbFnGzIOTVU/SiRWaN9u0rrzVHOLBMb+vZN7i7FF869ky86stzTxo4rlXPV+V1V6G2H3u6G6ZtzRy7OEyUyTdmwXNk1uzAZlPWN4uM795OmIfoE5eOZN09HqZKen4nU7m9TJTFKGf9Hi+zEwPDTzezVTRP3Ly6NnOsKgHjw+gzJT95wIlaA+gzNT9J4WMeL2baaKk44MoM+o5uHj2AMpM/Wh1ZP8p/oP1kfh0NXKk6umDgkHljQM/OXH0lpCLNDLwi2cPwkH8heCIO4oLDwEt2KLs0cSm90st9w/taI6I515Hi5zTP0bzPJrUNHtpmohND9daUrJ4G5yI95JXG3bB6oxYtZHjlqP3h6elpPTd7qsJxHeWl4Jek3R3b/+9BCL67he8phPC9FIZET0njO82zTTTTDPNNNNMM80000ze0L9YUxSeUpsNzAAAAABJRU5ErkJggg=="/>
                                            <Card.Body>
                                                <Card.Title>{driver.firstName}</Card.Title>
                                                <Card.Title>{driver.lastName}</Card.Title>
                                                <Card.Text>{driver.contactNumber}</Card.Text>
                                                <Card.Text>{driver.email}</Card.Text>
                                                <Card.Text>{driver.address}</Card.Text>
                                                <Card.Text>{driver.chargesPerDay}</Card.Text>
                                                <Card.Text>{driver.licenseNo}</Card.Text>
                                                <Button variant="primary">Book Now</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                ))}
                        </Row>
                    </Container>
                </div>
  );
}

export default DriverHome;
