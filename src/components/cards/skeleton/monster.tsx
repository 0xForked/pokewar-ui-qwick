import { component$ } from '@builder.io/qwik';

interface MonsterCardProps {
  name: string;
}

export const MonsterSkeletonCard = component$((props: MonsterCardProps) => {
  return <div></div>
});