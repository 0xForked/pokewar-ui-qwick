import { component$ } from '@builder.io/qwik';

interface BattleCardProps {
  name: string;
}

export const BattleSkeletonCard = component$((props: BattleCardProps) => {
  return <div></div>
});