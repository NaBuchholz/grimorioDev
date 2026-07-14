---
type: Study
tags:
  - Study
  - public
  - programming
  - CSharp
aliases:
  - Dependency Inversion Principle
  - DIP
status: Doing
relatedTo:
---

## Resume

---

## O Que É Inversão De Dependências ?

Inversão de Dependências é um PRINCÍPIO de design (o "D" do [SOLID](<./SOLID.md>)) sobre COMO você estrutura seu código: usando abstrações em vez de implementações concretas.

---

### Exemplos

### Visual

```txt
SEM Inversão de Dependência (Dependência tradicional):
┌─────────────────┐
│ NotificationSvc │ (Alto nível)
└────────┬────────┘
         │ depende diretamente
         ▼
┌─────────────────┐
│  EmailSender    │ (Baixo nível - implementação concreta)
└─────────────────┘

Problema: NotificationSvc conhece e depende de detalhes de implementação
``` 

```txt
COM Inversão de Dependência (Dependência invertida):
┌─────────────────┐
│ NotificationSvc │ (Alto nível)
└────────┬────────┘
         │ depende de
         ▼
┌─────────────────┐
│ IMessageSender  │ (Abstração)
└────────┬────────┘
         ▲ implementa
         │
┌─────────────────┐
│  EmailSender    │ (Baixo nível - implementação concreta)
└─────────────────┘

Solução: Ambos dependem da abstração. A "seta" foi invertida!
```

#### CSharp

```csharp
// PROBLEMA SEM DI: acoplamento forte
// GameService depende diretamente de implementações concretas
public class GameServiceBad
{
    private ConsoleLogger _logger = new ConsoleLogger(); // ❌ Criação direta
    private SqlRepository _repo = new SqlRepository();   // ❌ Acoplado ao SQL
    
    public void SaveGame()
    {
        _logger.Log("Saving...");
        _repo.Save();
        // Problema: não posso trocar para FileLogger ou MongoRepository sem mudar código
        // Problema: difícil testar - sempre usa console e SQL real
    }
}

// SOLUÇÃO COM DI: inversão de dependência

// 1. DEFINA ABSTRAÇÕES (interfaces)
public interface ILogger
{
    void Log(string message);
    void LogError(string message, Exception ex);
}

public interface IRepository
{
    void Save(object data);
    object Load(string id);
}

// 2. IMPLEMENTAÇÕES CONCRETAS
public class ConsoleLogger : ILogger
{
    public void Log(string message)
    {
        Console.WriteLine($"[INFO] {DateTime.Now}: {message}");
    }
    
    public void LogError(string message, Exception ex)
    {
        Console.WriteLine($"[ERROR] {message}: {ex.Message}");
    }
}

public class FileLogger : ILogger
{
    private readonly string _filePath;
    
    public FileLogger(string filePath)
    {
        _filePath = filePath;
    }
    
    public void Log(string message)
    {
        File.AppendAllText(_filePath, $"{DateTime.Now}: {message}\n");
    }
    
    public void LogError(string message, Exception ex)
    {
        File.AppendAllText(_filePath, $"ERROR - {message}: {ex}\n");
    }
}

// 3. CONSTRUCTOR INJECTION (padrão recomendado)
public class GameService
{
    // readonly: campos só podem ser setados no construtor
    // Garante imutabilidade das dependências
    private readonly ILogger _logger;
    private readonly IRepository _repository;
    
    // Dependências são INJETADAS via construtor
    // A classe NÃO cria suas dependências, apenas USA
    public GameService(ILogger logger, IRepository repository)
    {
        // Validação: null check para evitar erros
        _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        _repository = repository ?? throw new ArgumentNullException(nameof(repository));
    }
    
    public void SaveGame(object gameData)
    {
        try
        {
            _logger.Log("Starting save operation");
            _repository.Save(gameData);
            _logger.Log("Game saved successfully");
        }
        catch (Exception ex)
        {
            _logger.LogError("Failed to save game", ex);
            throw;
        }
    }
}

// 4. CONFIGURAÇÃO DO CONTAINER DI (exemplo ASP.NET Core)
public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);
        
        // REGISTRAR SERVIÇOS: mapeia interface -> implementação
        
        // TRANSIENT: cria nova instância a cada requisição
        // Use para: serviços leves, stateless, sem compartilhamento
        builder.Services.AddTransient<ILogger, ConsoleLogger>();
        
        // SCOPED: uma instância por requisição HTTP/escopo
        // Use para: repositórios, contextos de banco, unidade de trabalho
        builder.Services.AddScoped<IRepository, SqlRepository>();
        builder.Services.AddScoped<GameService>(); // Também pode registrar classes concretas
        
        // SINGLETON: uma única instância para toda aplicação
        // Use para: configurações, caches, serviços compartilhados thread-safe
        builder.Services.AddSingleton<IConfiguration>(new AppConfiguration());
        
        var app = builder.Build();
        
        // O container resolve automaticamente as dependências
        // Se você pedir GameService, ele:
        // 1. Vê que precisa de ILogger e IRepository
        // 2. Cria ConsoleLogger e SqlRepository
        // 3. Passa ambos para o construtor de GameService
        // 4. Retorna GameService totalmente configurado
    }
}

// 5. USO EM CONTROLLERS/SERVIÇOS
public class GameController
{
    private readonly GameService _gameService;
    
    // O framework injeta automaticamente
    public GameController(GameService gameService)
    {
        _gameService = gameService;
    }
    
    public void Save()
    {
        _gameService.SaveGame(new { level = 5, score = 1000 });
    }
}
```

#### References and Footnotes
