import Form from "./form/Form";
const GeneralFormContainer = ({fullName, setFullName, email ,setEmail ,phone ,setPhone, cityProv, setCityProv}) => {
    return (
        <>
                            <Form
                              label="Full Name"
                              type = 'text'
                              placeholder="Enter your full name"
                              value = {fullName}
                              onChange={(e) => setFullName(e.target.value)}
                            />
                            <Form
                              label="Email"
                              type="text"
                              placeholder="Email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <Form
                              label="Phone"
                              type="tel"
                              placeholder="Phone"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                            />
                            <Form
                              label="City and Province"
                              type="text"
                              placeholder="City, Province"
                              value={cityProv}
                              onChange={(e) => setCityProv(e.target.value)}
                            />

<div class="btn-container">
                          <button>Save</button>
                      </div>

        </>
    );
  };

  export default GeneralFormContainer;
