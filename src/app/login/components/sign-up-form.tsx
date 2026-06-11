import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

function SignUpForm() {
  return (
    <div>
      <Card className="p-2">
        <CardHeader>
          <CardTitle> Crie sua Conta para Acessar o Sistema.</CardTitle>
        </CardHeader>
        <Label>Nome</Label>
        <Input placeholder="Digite seu Nome" />
        <Label>Email</Label>
        <Input type="email" placeholder="Digite seu Email" />
        <Label>Senha</Label>
        <Input type="password" placeholder="Digite sua Senha" />
        <Label>Confirmar Senha</Label>
        <Input type="password" placeholder="Confirme sua Senha" />
        <h4>
          Já tem uma Conta?
          <span className="bg-red-700">Faça seu Login Aqui</span>
        </h4>

        <Button className="bg-blue-600">Criar Conta</Button>
      </Card>
    </div>
  );
}

export default SignUpForm;
