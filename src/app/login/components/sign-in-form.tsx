import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

function SignInForm() {
  return (
    <div>
      <Card className="p-2">
        <CardHeader>
          <CardTitle>Faça Login para Acessar o Sistema.</CardTitle>
        </CardHeader>
        <Label>Email</Label>
        <Input type="email" placeholder="Digite seu Email" />
        <Label>Senha</Label>
        <Input type="password" placeholder="Digite sua Senha" />

        <Button className="bg-blue-600">Login</Button>
      </Card>
    </div>
  );
}

export default SignInForm;
