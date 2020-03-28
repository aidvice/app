import React, { useEffect, useState } from 'react';
import { getLocation } from '~/utils/Location';
import { getPermissions } from '~/utils/Permissions';

import { Container, Text } from './styles';

export default function Main() {
  const [location, setLocation] = useState({});

  async function init() {
    await getPermissions();
    const currentLocation = await getLocation();
    console.log(currentLocation);
    setLocation(currentLocation);
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <Container>
      <Text>{JSON.stringify(location)}</Text>
    </Container>
  );
}
