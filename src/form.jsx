import 'bulma/css/bulma.min.css';
import { Form, Icon, Button } from 'react-bulma-components';

export function SubscriberForm() {
    return <form onSubmit={event => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formObject = Object.fromEntries(formData.entries());
        console.log(formObject);
    }}>
      <Form.Field>
        <Form.Label>Username</Form.Label>
        <Form.Control>
          <Form.Input
            name="username"
          />
          <Icon align="left" size="small">
            <i className="fas fa-user" />
          </Icon>
          <Icon align="right" size="small">
            <i className="fas fa-check" />
          </Icon>
        </Form.Control>
        <Form.Help color="success">This username is available</Form.Help>
      </Form.Field>

      <Form.Field>
        <Form.Label>Email</Form.Label>
        <Form.Control>
          <Form.Input
            name="email"
          />
          <Icon align="left" size="small">
            <i className="fas fa-envelope" />
          </Icon>
          <Icon align="right" size="small">
            <i className="fas fa-exclamation-triangle" />
          </Icon>
        </Form.Control>
        <Form.Help color="danger">This email is invalid</Form.Help>
      </Form.Field>

      <Form.Field>
        <Form.Label>Location</Form.Label>
        <Form.Control>
          <Form.Input
            
            name="location"
          />
          <Icon align="left" size="small">
            <i className="fas fa-envelope" />
          </Icon>
          <Icon align="right" size="small">
            <i className="fas fa-exclamation-triangle" />
          </Icon>
        </Form.Control>
        <Form.Help color="danger">Insert address for delivery</Form.Help>
      </Form.Field>

      

      <Form.Field>
        <Form.Label>Subject</Form.Label>
        <Form.Field kind="group">
          <Form.Control>
            <Form.Select
              name="Ordering for:"
            >
              <option value="select-dropdown">Myself</option>
              <option value="with-options">Catering</option>
            </Form.Select>

          </Form.Control>
          
        </Form.Field>
      </Form.Field>

      <Form.Field>
        <Form.Label>Subject</Form.Label>
        <Form.Field kind="Cuban Sandwiches: $10.99">
          <Form.Control>
            <Form.Select
              name="quantity"
            >
              <option value="select-dropdown">1</option>
              <option value="with-options">2</option>
              <option value="with-options">3</option>
              <option value="with-options">4</option>
            </Form.Select>

          </Form.Control>
          
        </Form.Field>
      </Form.Field>


      <Form.Field>
        <Form.Label>Additional Notes:</Form.Label>
        <Form.Control>
          <Form.Input
            name="Add a message for you order"
          />
          <Icon align="left" size="small">
            <i className="fas fa-user" />
          </Icon>
          <Icon align="right" size="small">
            <i className="fas fa-check" />
          </Icon>
        </Form.Control>
        <Form.Help color="success">We will make sure to note this down!</Form.Help>
      </Form.Field>

      <Form.Field kind="group">
        <Form.Control>
          <Button color="link">Submit</Button>
        </Form.Control>
        <Form.Control>
          <Button color="link" colorVariant="light">
            Cancel
          </Button>
        </Form.Control>
      </Form.Field>
    </form>
}