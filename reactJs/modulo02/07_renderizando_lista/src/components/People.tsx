interface PeopleProps {
  data: {
    name: string;
    age: number;
  }
}

export function People({ data }: PeopleProps) {
  return (
    <li>
      {data.name} - {data.age} years.
    </li>
  );  
}