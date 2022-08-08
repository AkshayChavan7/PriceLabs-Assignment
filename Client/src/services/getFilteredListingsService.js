export default async function getFilteredListings(requestObject) {
  try {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "DUAID=5373c622-541e-5bdc-caa8-12d11d7536e5; HMS=8f54b588-c6db-4084-a58f-b0fb59194701; MC1=GUID=5373c622541e5bdccaa812d11d7536e5; ak_bmsc=14EDE8AA97ABBCCB6C4770421E98853D~000000000000000000000000000000~YAAQbwkuF6uCuV6CAQAA2gocfRBFo89LKRR47gV53TS7RN30vSv2vIOxl12mXWXJ2aRoq51uOrC+GIOFNmpmrV5Z2QShwli5DTxGr0jzVQJJtFJAMVa/uMKg3GwkC3YoDYUv/fyHV85ZnPc7jTrLECJgpgPoybfOadk+GU+xySOQXOpsOR4hyP1yDKztwVgt7yR3IPkGN0Z2RZ2MQRzdZlRsGfy1X/q6Wjj+9+9Jq0a+y29qZc/+nwKqemHVGOdCtlmdDZTQpY4KdPoBg/Kb8r9HRiX3nt75laf5bm8FK6zAyc9+I3n8iEUHGE4mMKV/cfkzjy3z5aHKKRnVV75EWumsTfknNGHI6t8h9gTZZgOQUsPu9bKALh1f; eu-site=0; f7f6a5f1-43dd-a476-5aed-91447139f91cSL=1; ha-device-id=5373c622-541e-5bdc-caa8-12d11d7536e5; hal=ga=1&ua=1&si=1&ui=1&vi=1&pr=0; has=f7f6a5f1-43dd-a476-5aed-91447139f91c; hav=5373c622-541e-5bdc-caa8-12d11d7536e5"
    );

    console.log("requestParams", requestObject);

    var raw = JSON.stringify(requestObject);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const response = await fetch(
      "http://localhost:4000/fetchData",
      requestOptions
    );

    if (!response.ok) {
      throw response;
    }
    const json_response = await response.json();
    return json_response;
  } catch (err) {
    console.log("Error while calling getFilteredListings service!");
  }
}
