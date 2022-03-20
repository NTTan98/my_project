import React, { useState } from 'react';
import { Container, Checkbox, Text } from '@chakra-ui/react';
function ListTodo() {
  const [isChecked, setChecked] = useState(false);

  return (
    <div>
      <Container maxW="container.md">
        <Checkbox
          colorScheme="green"
          spacing="1rem"
          iconColor="red.400"
          iconSize="1rem"
          onChange={e => setChecked(e.target.checked)}
        >
          <Text
            style={
              isChecked
                ? { textDecoration: 'line-through' }
                : { textDecoration: 'none' }
            }
          >
            Task 1
          </Text>
        </Checkbox>
      </Container>
    </div>
  );
}

export default ListTodo;
