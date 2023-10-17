import {
  Card,
  CardSection,
  Image,
  Text,
  Badge,
  Group,
  Container,
  Grid,
  GridCol,
} from '@mantine/core';

type RickAndMortyCharacter = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: { name: string; url: string };
  location: { name: string; url: string };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

async function getCharacters(): Promise<RickAndMortyCharacter[]> {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  const data = await res.json();
  return data.results;
}

export async function RickAndMorty() {
  const data = await getCharacters();
  return (
    <Container>
      <h1>Rick and Morty - SSR</h1>
      <Grid>
        {data.map((character) => (
          <GridCol span={3} key={character.id}>
            <Card shadow="sm" padding="lg" radius="sm" withBorder>
              <CardSection>
                <Image src={character.image} height={160} alt="Norway" />
              </CardSection>

              <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>{character.name}</Text>
                <Badge color="pink" variant="light">
                  {character.status}
                </Badge>
              </Group>

              <Text size="sm" c="dimmed">
                {character.species}
              </Text>
            </Card>
          </GridCol>
        ))}
      </Grid>
    </Container>
  );
}
