# Create Object

## Definition

With this [Teststep](../Teststep) type, an object is created in-memory and put on the list for objects to be committed using a [Persist](persist) step.

## Actions

### Add a Create Object Teststep

- Navigate to the Test Suite and select the Automatic Test Case that you want to create a Teststep in.
- Click "*+ Object*" to create an Object Teststep.
- Enter a name and Select 'Create' for the Action.
- Select an entity.
- Click "Insert before selected" to add the Teststep before the selected one, or "Insert after selected" to add the Teststep after the selected one. If there are no Teststeps in the Test Case yet, it does not matter.
- Select [Attribute Values](../attribute-value) and associations.

Note that not checking an Attribute Value in a Create Object Teststep will make the value default to what has been configured in the Mendix domain model (usually empty).
Checking an Attribute Value but not entering a value will make the value empty for all datatypes except the String datatype. A String attribute will be given the zero-length value (''). 